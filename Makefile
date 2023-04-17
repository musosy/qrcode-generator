build-client:
	(cd client ; yarn build)

start:
	(cd client ; yarn start)

build-wasm:
	(cd libs ; make build)
