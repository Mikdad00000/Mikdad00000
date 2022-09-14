function STopic({name}) {
    return (
        <>
            <span className=" flex m-2 text-bold-4xl ">{name}</span>
        </>
    )
};


function TopicBar() {
    return (
        <div className=" w-full h-12 flex justify-center">
            <STopic name='Bangladesh' />
            <STopic name='International' />
            <STopic name='Sports' />
            <STopic name='Opinion' />
            <STopic name='Business' />
            <STopic name='Youth' />
            <STopic name='Entertainment' />
            <STopic name='Lifestyle' />
        </div>

    )
};

export default TopicBar;