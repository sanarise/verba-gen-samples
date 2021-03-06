install:
	npm install

run:
	npx babel-node -- 'src/bin/verba-gen-samples.js' $(I) $(O)

build:
	rm -rf dist
	npm run build

test:
	npm test

lint:
	npx eslint .

publish:
	npm publish

.PHONY: test
