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

export const course = (req, res) => {
    // Pull courses here
    const { id: courseId } = req.query;
    res.status(200).send({ data: pulledCourses[courseId] });
};

export const courses = (req, res) => {
    // Pull courses here
    res.status(200).send({ data: pulledCourses });
};

export const posting = (req, res) => {
    req.app.locals.postings.push(req.body);
    res.status(200).send({
        data: {
            msg: 'Succesfully saved new posting',
            id: req.app.locals.postings.length - 1
        }
    });
};
