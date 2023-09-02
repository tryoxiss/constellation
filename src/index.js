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

var FileExplorer =
{
    view: function()
    {
        return m("ul", { class: "file-explorer" }, [
            m("li", "file :3")
        ])
    }
}

var MainView =
{
    view: function()
    {
        return m("", [
            m("h1", "Hello"),
            m(FileExplorer),
            m("div", { class: "content-area markdown-area yes-do-render", contenteditable: true })
        ])
    }
}

var GraphView =
{
    view: function()
    {
        return m("div", [
            m("h1", "Not implemented yet"),
            m(FileExplorer),
            m("p", "Sorry :/"),
            m("a", { href: "#/edit" }, "go back")
        ])
    }
}

m.route(root, "/splash",
{
    "/splash": Splash,
    "/edit": MainView,
    "/graph": GraphView,
})