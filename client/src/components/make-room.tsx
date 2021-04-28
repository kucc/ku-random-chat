import React from 'react';

function makeRoom(){
    const [value, setValue] = useState('');

    const onSubmit = (e: React.FormEvent) => { //제출동작을 멈춰줌
        e.preventDefault();
        setValue('');
    };
    return(
        <form onSubmit={onSubmit} className = "roomForm">
            <input
                value={value}
                placeholder="방이름을 입력해주세요"
                onChange={e => setValue(e.target.value)}
            />
            <button>개설</button>
        </form>
    );
}

export default makeRoom;