
import { MutatingDots } from 'react-loader-spinner'

export const Loader = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <MutatingDots
                visible={true}
                height="100"
                width="100"
                color="blue"
                secondaryColor="black"
                radius="12.5"
                ariaLabel="mutating-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>

    )
}
