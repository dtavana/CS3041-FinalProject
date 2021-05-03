/* eslint-disable import/prefer-default-export */
export const courses = (req, res) => {
    // Pull courses here
    const pulledCourses = [
        {
            id: 0,
            name: 'Green Hill Golf Course',
            address: '123 Green St, Worcester MA',
            rating: '4.4',
            cost: '$$'
        },
        {
            id: 1,
            name: 'Worcester Country Club',
            address: '546 Main St, Worcester MA',
            rating: '3.6',
            cost: '$'
        },
        {
            id: 2,
            name: 'Shaker Hill Country Club',
            address: '146 Shaker Rd, Harvard MA',
            rating: '4.9',
            cost: '$$$'
        }
    ];
    res.status(200).send({ data: pulledCourses });
};
