const news_job = [
    ["id", "title", "info", "salary_from", "salary_to", "status", "created_by", "created_date", "end_date",],
    ["id", "title", "info", "salary_from", "salary_to", "status", "updated_by", "updated_date", "end_date",],
]

const history = [
    ["id", "action", "page", "note", "created_date", "created_by"],
    []
]

exports.models = {
    news_job,
    history,
    // users,
}