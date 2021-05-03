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
    render(req, res, 'time', { passedDate });
};

export const course = (req, res) => {
    const { date: passedDate, time: passedTime } = req.query;
    render(req, res, 'course', { passedDate, passedTime });
};
