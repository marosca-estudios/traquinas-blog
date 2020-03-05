SHELL := bash
export PATH := node_modules/.bin:${PATH}
export NODE_OPTIONS := --trace-deprecation --trace-warnings

# Do when invoked without targets
all: clean
	make build

# Erase node modules, package-lock.json
clean:
	cd client; \
	rm -rf node_modules \
	rm -rf package-lock.json

# Remove build folder and recompile it
build: install
	cd client; \
	rm -rf ./build \
	echo "Removed build folder"; \
	npm run build

# Install project dependencies
install:
	cd client; \
	npm install && \
	touch node_modules

# Deploy to google cloud
deploy:
	# Needs to be where app.yaml is located
	cd client; \
	gcloud app deploy

# Command deploy app on gcp
serve: all
	make deploy
