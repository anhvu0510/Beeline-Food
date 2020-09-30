class IssueController {
    index(req, res){
        res.render('pageIssue', { title: "Xuất Kho", isActive: 4 })
    }
}
module.exports = new IssueController