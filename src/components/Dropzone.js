import React from 'react';
import {useCallback, useMemo, FunctionComponent, Dispatch} from "react";
import {useDropzone} from 'react-dropzone';
import '../Assetes/styles/dropzone.css'


const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px 100px',
    textAlign: 'center',
    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#808080',
    borderStyle: 'dashed',
    color: 'black',
    outline: 'none',
    transition: 'border .24s ease-in-out'
};

const focusedStyle = {
    borderColor: '#808080'
};

const acceptStyle = {
    borderColor: '#808080'
};

const rejectStyle = {
    borderColor: 'red',
    background: '#cdd7e3'
};


const Dropzone: FunctionComponent<{setFile: Dispatch<any>}> = ({setFile}) => {
    const onDrop = useCallback((acceptedFiles) => {
        console.log(acceptedFiles)
        setFile(acceptedFiles[0])
    }, [])

    const {
        getRootProps,
        getInputProps,
        isDragAccept,
        isDragReject,
        isFocused
    } = useDropzone({
        onDrop,
        multiple: false,
        accept: '.jks, .pfx, .pk8, .zs2, .dat, .txt'

    });

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isFocused,
        isDragAccept,
        isDragReject
    ]);

    return (
        <div>
            <div className="container">
                <div {...getRootProps({style})}>
                    <input {...getInputProps()} />
                    <div>
                        <p className="title">Перетягніть сюди файл ключа
                            або <span>оберіть його на своєму носієві</span></p>
                        <p className="formats">Підтримуються формати: .jks, .pfx, .pk8, .zs2, .dat</p>
                    </div>
                </div>
            </div>
            <div>
                {isDragReject && (
                    <p style={{color: 'red'}}>Перевищено допустимий розмір або некоректний формат файлу</p>)}
            </div>
        </div>
    )
}
export default Dropzone;
