
interface itemsProp{
    items: string
}

const Tools = ({items}: itemsProp) => {

    return <>
   <div className='border dark:bg-black border-.5 dark:text-white dark:border-white border-black flex items-center justify-center rounded-3xl px-3 py-0.5'>
     {items}
   </div>
   </>
}

export default Tools