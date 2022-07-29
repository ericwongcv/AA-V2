import { useEffect, useState } from 'react';

function Message({ size, featherCount }) {
  const [sizeClass, setSizeClass] = useState('');
  const [message, setMessage] = useState('');

    useEffect(() => {
        if (featherCount <= 0) {
            setMessage('Oh my! Your bird is naked!');
        } else if (featherCount >= 10) {
            setMessage('Full turkey!');
        } else {
            setMessage('Coming along...');
        }
    }, [featherCount]);

    useEffect(() => {
        console.log('Message', size);
    }, [size]);

    useEffect(() => {
        console.log('PictureDisplay', size);

        let sizeCode = '';

        switch (size) {
          case 'm':
            sizeCode = 'medium'
            break;
          case 'l':
            sizeCode = 'large'
            break;
          case 'xl':
            sizeCode = 'xlarge'
            break;
          default:
            sizeCode = 'small'
            break;
        }
        // console.log("CSS Size:", sizeCode);
        setSizeClass(sizeCode);
      }, [size]);

    return (
        <div className={`message ${sizeClass}`}>
            {message}
        </div>
    );
};

export default Message;
