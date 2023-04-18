use wasm_bindgen::prelude::*;
use qrcode_generator::QrCodeEcc;

#[wasm_bindgen(js_name = generateQrCode)]
pub fn qr(url: &str, size: usize) -> String {
    match generate_qr_code(url, size) {
        Ok(s) => s,
        Err(err) => err.to_string()
    }
}

pub fn generate_qr_code(url: &str, size: usize) -> Result<String, qrcode_generator::QRCodeError> {
    qrcode_generator::to_svg_to_string(
        url,
        QrCodeEcc::Low,
        size,
        None::<&str>
    )
}

#[cfg(test)]
mod test {
    use super::*;

    const DUMMY_VALID_URL: &str = "http://youtube.com";
    const DUMMY_VALID_SIZE: usize = 256;

    #[test]
    fn valid_url_and_size() {
        let result = generate_qr_code(DUMMY_VALID_URL, DUMMY_VALID_SIZE);
        assert!(result.is_ok());
    }
}