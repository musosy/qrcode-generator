import { useEffect, useState } from 'react';
import init, { generateQrCode } from 'qrgen';
import './App.css';

const QRCODE_SIZE = [
    64,
    128,
    256,
    512,
];

function App() {
    const [url, setUrl] = useState('');
    const [size, setSize] = useState(QRCODE_SIZE[1]);
    const [qrcode, setQrcode] = useState('');

    function generate() {
        init().then(() => {
            if (url !== '') {
                setQrcode(generateQrCode(url, size))
                document.getElementById('svg')!.innerHTML = qrcode;
            }
		});
    }
	useEffect(() => {
        generate()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [url, size, qrcode]);
	return (
		<div className='App'>
			<header className='App-header'>
                <div id="form">
                    <label htmlFor="url">URL</label><br />
                    <input type="text" name="url" id="url" onChange={(event) => { setUrl(event.target.value); generate() }}/><br />
                    <label htmlFor="size">Size</label><br />
                    <select name="size" id="size" onChange={(event) => setSize(+event.target.value)}>
                        { QRCODE_SIZE.map(s => {
                            return <option value={s}>{s}</option>
                        })}
                    </select><br />
                    <input type="submit" value="Generate" onClick={generate}/>
                </div>
                <div id="svg"></div>
			</header>
		</div>
	);
}

export default App;
