Docker build Process:

First image FROM alpine:3.5 AS bas – is a base Node image with: node, npm, tini (init app) and package.json
Second image FROM base AS dependencies – contains all node modules from dependencies and devDependencies with additional copy of dependencies required for final image only
The final image FROM base AS release – is a base Node image with application code and all node modules from dependencies