import m from "mithril";

let root = document.body

m.render(root, [
    m("h1", "Hello constellation!")
]);

var Splash =
{
    view: function()
    {
        return m("", [
            m("a", { href: "#/edit" }, "Go inside!")
        ])
    }
}

var count = 0;

var FileExplorer =
{
    view: function()
    {
        return m("ul", { class: "file-explorer" }, [
            m("li", { onclick: function() { count++ } }, "file " + count)
        ])
    }
}

var MainView =
{
    view: function()
    {
        return m("app", [
            m(FileExplorer),
            m("main", [
                m("h1", "Hello"),
                m("div", { class: "content-area markdown-area yes-do-render", contenteditable: true })
            ])
        ])
    }
}

var GraphView =
{
    view: function()
    {
        return m("app", [
            m(FileExplorer),
            m("main", [
                m("h1", "Not implemented yet"),
                m("p", "Sorry :/"),
                m("a", { href: "#/edit" }, "go back")
            ])
        ])
    }
}

m.route(root, "/splash",
{
    "/splash": Splash,
    "/edit": MainView,
    "/graph": GraphView,
})