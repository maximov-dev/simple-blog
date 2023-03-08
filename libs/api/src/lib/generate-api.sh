rm -rf ./libs/api/src/lib/generated
rm -rf ./libs/api/src/lib/models

openapi-generator-cli generate;

mv ./libs/api/src/lib/generated/model ./libs/api/src/lib/models
rm -rf ./libs/api/src/lib/generated
