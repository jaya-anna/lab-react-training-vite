

function Random(prop) {
    const {min, max} = prop

    let randomNum = Math.random() * (max - min) + min;
return <b>Random value between {min} and {max}: {randomNum.toFixed(0)}!</b>
}

export default Random;