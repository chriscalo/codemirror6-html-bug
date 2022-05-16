import { EditorState, EditorView, basicSetup } from "@codemirror/basic-setup";
import { html } from "@codemirror/lang-html";
import { stripIndent } from "common-tags";

const doc = stripIndent`
<!DOCTYPE html>

<!----------------------------------------------------------------------------
This stylized HTML comment is used to divide long documents into
easily-findable sections. 

The following closing comment tag is 78 characters: 77 dashes and a greater
than symbol. This should be recognized by Codemirror as a closing comment tag,
and all following syntax highlighting should work correctly.
----------------------------------------------------------------------------->

<div>syntax highlighting after the first comment works</div>

<!-----------------------------------------------------------------------------
However, this stylized HTML comment is slightly longer: 79 characters. By
adding just one more dash to the closing comment tag, Codemirror no longer
recognizes this closing tag, breaking all following syntax highlighting.
------------------------------------------------------------------------------>

<div>Codemirror still thinks this is inside the HTML comment</div>
`;

new EditorView({
  state: EditorState.create({
    doc: doc,
    extensions: [basicSetup, html()],
  }),
  parent: document.body,
});
