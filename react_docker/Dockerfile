####################################################################
########            Stage 1 (production base)         ##############
####################################################################

# 1. Use the node apline image as the base stage of a multi-stage routine
# FROM node:13.7.0-alpine as base
FROM node:12.16.1-stretch-slim as base
# This gets our prod dependencies installed and out of the way

# 2. Provide meta data about the port the container must expose
# set this with shell variables at build-time.
# If they aren't set, then not-set will be default.
ARG CREATED_DATE=May-2020
ARG SOURCE_COMMIT=not-set
# labels from https://github.com/opencontainers/image-spec/blob/master/annotations.md
LABEL org.opencontainers.image.authors=TurtleWolfe.com
LABEL org.opencontainers.image.created=$CREATED_DATE
LABEL org.opencontainers.image.revision=$SOURCE_COMMIT
LABEL org.opencontainers.image.title="RNDs"
LABEL org.opencontainers.image.url=https://hub.docker.com/TurtleWolfe/RNDs
LABEL org.opencontainers.image.source=https://github.com/TurtleWolf/RNDs
LABEL org.opencontainers.image.licenses=MIT
LABEL com.TurtleWolfe.nodeversion=$NODE_VERSION
EXPOSE 3000
EXPOSE 9009
COPY .bashrc /home/node

# 15. Set the working directory to /client
WORKDIR /client


# # 4. Install only the production node_modules and clean up the cache
# RUN npm ci \
#     && npm cache clean --force

RUN apt-get update \
    && mkdir this_app \
    && chown -R node:node . \
    && apt-get install curl -y \
    && npm config list

# node comes with a default user
USER node

# # 18. Copy both package.json and package-lock.json into /client in the image's filesystem
# COPY package*.json ./
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

# we use npm ci here so only the package-lock.json file is used
RUN npm config list \
    && npm ci \
    && npx create-react-app this_app \
    && npm cache clean --force
WORKDIR /client/this_app

####################################################################
########                  Development STAGE                 ########
####################################################################
## Stage 2 (development)
# we don't COPY in this stage because for dev you'll bind-mount anyway
# this saves time when building locally for dev via docker-compose
# 21. Extend the base stage and create a new stage named dev
FROM base as dev

#22. Set the NODE_ENV and PATH Environment variables
ENV NODE_ENV=development
ENV PATH /client/this_app/node_modules/.bin:$PATH
# ENV PATH /client/this_app/node_modules/.bin:$PATH


# 8. Create a new /app directory in /client
# RUN mkdir /client/this_app

# 24. Install development dependencies
# RUN npm install --only=development --silent
RUN npm i --only=development \
    && npm cache clean --force

# 24. Patch create-react-app bug preventing self-signed certificate usage
# https://github.com/facebook/create-react-app/issues/8075
# COPY patch.js /client/node_modules/react-dev-utils/webpackHotDevClient.js

# 25. Print npm configuration for debugging purposes
RUN npm config list

# 26. Set the working directory to /client/app
WORKDIR /client/this_app

USER node

# ENTRYPOINT [ "/sbin/tini", "--"]
# 28. Provide the default command for the development container
CMD ["npm", "run", "start"]
# CMD ["npm", "run", "start", "--inspect=0.0.0.0:9229"]

####################################################################
########                  StoryBook STAGE                  #########
####################################################################
FROM dev as story
# RUN npm install @storybook/cli -g
RUN npx -p @storybook/cli sb init --type react_scripts
# RUN npx -p @storybook/cli sb init --type react_scripts && getstorybook
# RUN getstorybook
WORKDIR /client/this_app
USER node
CMD ["npm", "run", "storybook"]
# CMD ["yarn", "storybook"]

####################################################################
########                  Source STAGE                  ############
####################################################################
## Stage 3 (copy in source)
# This gets our source code into builder for use in next two stages
# It gets its own stage so we don't have to copy twice
# this stage starts from the first one and skips the last two
FROM base as source
WORKDIR /client/this_app
COPY . .
# RUN rm -r proxy


####################################################################
########                  Testing STAGE                  ###########
####################################################################
# ## Stage 4 (testing)
# # use this in automated CI
# # it has prod and dev npm dependencies
# # In 18.09 or older builder, this will always run
# # In BuildKit, this will be skipped by default 
# 32. Extend the dev stage and create a new stage called test
FROM source as test

# 32. Copy the remainder of the client folder source code into the image's filesystem
# COPY . .

# 33. Run node_module vulnerability checks
# RUN npm audit

# 34. Run unit tests in CI
RUN CI=true npm test --env=jsdom

# FROM source as test
# ENV NODE_ENV=development
# ENV PATH=/opt/node_modules/.bin:$PATH
# # this copies all dependencies (prod+dev)
# COPY --from=dev /opt/node_modules /opt/node_modules
# # run linters as part of build
# # be sure they are installed with devDependencies
# RUN eslint . 
# # run unit tests as part of build
# RUN npm test
# # run integration testing with docker-compose later
# WORKDIR /opt/this_app
# CMD ["npm", "run", "int-test"] 


####################################################################
########                  Security STAGE                  ##########
####################################################################
# ## Stage 5 (security scanning and audit)
# FROM test as audit
# RUN npm audit
# # aqua microscanner, which needs a token for API access
# # note this isn't super secret, so we'll use an ARG here
# # https://github.com/aquasecurity/microscanner
# ARG MICROSCANNER_TOKEN
# ADD https://get.aquasec.com/microscanner /
# RUN chmod +x /microscanner
# RUN apk add --no-cache ca-certificates && update-ca-certificates
# RUN /microscanner $MICROSCANNER_TOKEN --continue-on-failure


####################################################################
########                   BUILD STAGE                       #######
####################################################################
# 18. Extend the test stage and create a new stage named build-stage
FROM test as build-stage

# 19. Build the production static assets
RUN npm run build

# 20. Install aquasecurity's trivy for robust image scanning
FROM aquasec/trivy:0.4.3 as trivy

# 21. Scan the nginx alpine image before production use
RUN trivy nginx:1.17-alpine && \
    echo "No image vulnerabilities" > result

####################################################################
########                  PRODUCTION STAGE                  ########
####################################################################
# ## Stage 6 (default, production)
# # this will run by default if you don't include a target
# # it has prod-only dependencies
# # In BuildKit, this is skipped for dev and test stages

# 22. Extend the nginx apline image and create a new stage named prod
FROM nginx:1.17-alpine as prod

# 23. Copy only the files we want from a few stages into the prod stage
COPY --from=trivy result secure
COPY --from=build-stage /client/this_app/build /usr/share/nginx/html
# COPY .bashrc /home/node

# 24. Copy non-root user nginx configuration
# https://hub.docker.com/_/nginx
# COPY --from=build-stage /client/this_app/nginx /etc/nginx/

# 25. Provide meta data about the port the container must expose
EXPOSE 80

# 26. Define how Docker should test the container to check that it is still working
# HEALTHCHECK CMD [ "wget", "-q", "0.0.0.0:80" ]
CMD ["nginx", "-g", "daemon off;"]