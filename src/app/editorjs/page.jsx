'use client'
// app/page.js

import React from 'react';
import EditorComponent from '../../components/EditorComponent';
import { Grid, Paper } from '@mui/material';
//import { paper_root } from './emotion-style';
import { css } from '@emotion/react';
import { red } from '@mui/material/colors';

const paper_root = css`
    background-color: red;
    text-align: right;
`

export default function Page() {
    const initialData = {
        blocks: [
            {
                type: 'header',
                data: {
                    text: 'Hello, Editor.js without real-time data fetching!',
                },
            },
            {
                type: 'paragraph',
                data: {
                    text: 'first paragraph',
                }
            }
        ],
    };

    return (
        <main>
            <title>EditorJS by kun</title>
            <Grid container >
                <Grid item xs={12}>
                    <h1>Editor.js in Next.js</h1>
                </Grid>
                <Grid item xs={12}>
                    <Paper>
                        <EditorComponent initialData={initialData} />
                    </Paper>

                </Grid>
            </Grid>
            <div>
            </div>
        </main>
    );
}
