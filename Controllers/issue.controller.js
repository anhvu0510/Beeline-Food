module.exports = {
    processLoadPage: (req, res) => {
        res.render('pageIssue', { title: "Xuất Kho", isActive: 4 })
    }
}