import { onMount, createSignal } from "solid-js";

function PageTitle(props) {
  const [pageTitle, setPageTitle] = createSignal("");
  onMount(() => {
    setPageTitle(document.title);
  });
  return <p>
      Page title is:
      {pageTitle()}
    </p>;
}

export default PageTitle;