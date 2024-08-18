'use client'; // 클라이언트 사이드에서만 실행

import React, { useRef, useEffect } from 'react';
import { EDITOR_JS_TOOLS } from './constant';
import EditorJS from '@editorjs/editorjs';
import Table from '@editorjs/table';

function EditorComponent({ initialData }) {
    const editorRef = useRef();

    const initEditor = () => {
        const editor = new EditorJS({
            holder: 'editorjs',
            placeholder: 'use \'/\' to create a new block',
            onReady: () => {
                editorRef.current = editor;
            },
            autofocus: true,
            data: initialData || {},
            onChange: async () => {
                let content = await editor.saver.save();
                console.log(content);
            },
            tools: EDITOR_JS_TOOLS,
        });
    };

    useEffect(() => {
        if (editorRef.current === null) {
            initEditor();
        }

        return () => {
            editorRef?.current?.destory();
            editorRef.current = null;
        };
}, [initialData]);

    const handleSave = async () => {
        // 저장 시 명령
        try {
            if (editorRef.current) {
                const outputData = await editorRef.current.save();
                console.log('Saving data:', outputData);

                const jsonData = JSON.stringify(outputData);
                console.log('JSON data:', jsonData);

                // 여기에 서버로 데이터를 전송하는 코드 추가 가능
                alert('Data saved successfully!');
            }
        } catch (error) {
            console.error('Saving failed:', error);
            alert('Failed to save data.');
        }
    };

    const button_to_json = async () => {
        try {
            if (editorRef.current) {
                const jsonData = JSON.stringify(content);
                console.log(jsonData);
            }
        }
        catch (error) {
            console.error('save to json failed', error);
        }
    }

    return (
            <div id="editorjs" style={{ border: '1px solid #ccc', padding: '10px' }}>
                {/* Editor.js가 여기에 삽입됨 */}
            </div>
    );
}

export default EditorComponent;
