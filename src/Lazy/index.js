import React, { lazy, Suspense } from 'react';

const Artists = lazy(() => import('./Artists'))

export default class LazyComponent extends React.Component {

    loading = () => {
        console.log('loading------');
        return <h1>Still Loading…</h1>
    }

    handleSubmit = () => {
        console.log('-----------')
    }

    render() {
        return (
            <div className='App'>
                <Suspense fallback={this.loading()}>
                    <Artists />
                </Suspense>
            </div>
        );
    }
}