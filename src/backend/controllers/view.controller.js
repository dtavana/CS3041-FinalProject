const render = (req, res, view, params) => {
    // eslint-disable-next-line no-unused-expressions
    params ? res.render(view, params) : res.render(view);
};

export const home = (req, res) => {
    render(req, res, 'home');
};

export const date = (req, res) => {
    render(req, res, 'date');
};

export const time = (req, res) => {
    const { date: passedDate } = req.query;
    if (!passedDate) {
        res.status(400).send({ data: { msg: 'Invalid query parameters' } });
    } else {
        render(req, res, 'time', { passedDate });
    }
};

export const course = (req, res) => {
    const { date: passedDate, time: passedTime } = req.query;
    if (!passedDate || !passedTime) {
        res.status(400).send({ data: { msg: 'Invalid query parameters' } });
    } else {
        render(req, res, 'course', { passedDate, passedTime });
    }
};

export const filter = (req, res) => {
    const {
        date: passedDate,
        time: passedTime,
        course: passedCourse
    } = req.query;
    if (!passedDate || !passedTime || !passedCourse) {
        res.status(400).send({ data: { msg: 'Invalid query parameters' } });
    } else {
        render(req, res, 'filter', { passedDate, passedTime, passedCourse });
    }
};

export const posting = (req, res) => {
    const {
        date: passedDate,
        time: passedTime,
        course: passedCourse,
        skillLevel: passedSkillLevel,
        ageMinimum: passedAgeMinimum
    } = req.query;
    if (
        !passedDate ||
        !passedTime ||
        !passedCourse ||
        !passedSkillLevel ||
        !passedAgeMinimum
    ) {
        res.status(400).send({ data: { msg: 'Invalid query parameters' } });
    } else {
        render(req, res, 'posting', {
            passedDate,
            passedTime,
            passedCourse,
            passedSkillLevel,
            passedAgeMinimum
        });
    }
};
