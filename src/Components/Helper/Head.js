import React from 'react'

const Head = ({ description, title }) => {

    React.useEffect(() => {
        document.title = title + ' | Dogs';
        document.querySelector("meta[name='description']")
            .setAttribute('content', description || '');
    }, [description, title])
    return (
        <></>
    )
}

export default Head