import m from "mithril";

let root = document.body

m.render(root, [
    m("h1", "Hello constellation")
]);

var Splash =
{
    view: function()
    {
        return m("")
    }
}

m.route()