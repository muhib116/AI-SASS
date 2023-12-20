export const useImageGenerator = () => {
    const resolutions = [
        {
            id: '256x256',
            title: '256x256',
        },
        {
            id: '512x512',
            title: '512x512',
        },
        {
            id: '1024x1024',
            title: '1024x1024',
        },
    ]
    const imageQuantity = [
        {
            id: 1,
            title: '1 Photos',
        },
        {
            id: 2,
            title: '2 Photos',
        },
        {
            id: 3,
            title: '3 Photos',
        },
        {
            id: 4,
            title: '4 Photos',
        },
        {
            id: 5,
            title: '5 Photos',
        }
    ]

    return {
        resolutions,
        imageQuantity
    }
}