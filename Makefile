#!/usr/bin/env make

.PHONY: install
install:
	@npm install
	
.PHONY: build
build: install
	@npm run build

.PHONY: start
start:
	@npm start

# deploy to github page
.PHONY: deploy
deploy: install build
	@npm run deploy

# release to s3
.PHONY: release
release: install build
	aws s3 cp --recursive ./build s3://${S3_BUCKET_NAME}/
	aws cloudfront create-invalidation --distribution-id ${AWS_CLOUDFRONT_ID} --paths "/*"

.PHONY: clean
clean:
	@rm -rf node_modules build
