build:
	# build the wasm package
	wasm-pack build --target web --release
	# link it in the client
	(cd ../.. ; yarn add ./libs/qrgen/pkg)

test:
	cargo test -- --nocapture