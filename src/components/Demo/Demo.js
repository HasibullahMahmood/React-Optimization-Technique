import React from 'react';
import MyParagraph from './MyParagraph/MyParagraph';

const Demo = (props) => {
	console.log('Demo Running');
	return <MyParagraph />;
};

export default React.memo(Demo);
