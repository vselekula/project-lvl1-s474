install:
		npm install
start:
		npx babel-node -- 'src/bin/brain-games.js'
build:
		npm run build
publish:
		npm publish
make lint:
		npx eslint .