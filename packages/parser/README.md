<div align="center">
  <h1>@sveltosis/parser</h1>
</div>

<p align="center">
<b>
  Still in development
  </b>
</p>
<p align="center">
  A Svelte parser that compiles to Mitosis JSON, allowing you to write Svelte components once and compile to every framework. 
</p>
<p align="center">
 Powered by 
  <a href="https://github.com/BuilderIO/mitosis">Mitosis</a>
  </p>
<br>

---

<p align="center">
  <p align="center">
    Try our  <a href="https://try.sveltosis.dev/"><b>interactive fiddle</b></a>
  </p>
</p>

<br>
<p align="center">
  <a href="https://github.com/prettier/prettier"><img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg" /></a>
  <a href="https://github.com/BuilderIO/mitosis/pulls"><img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" /></a>
  <a href="https://github.com/BuilderIO/mitosis"><img alt="License" src="https://img.shields.io/github/license/BuilderIO/mitosis" /></a>
  <a href="https://www.npmjs.com/package/@builder.io/mitosis"><img alt="Types" src="https://img.shields.io/npm/types/@builder.io/mitosis" /></a>
  
</p>

<br>

Features listed in the following table are the ones listed in the [Svelte docs](https://svelte.dev/docs).
The goal is to support as much of Svelte's syntax as possible, but features listed in the table below might or might not be feasible to implement and are pending investigation.

<br>

<div align="center">

| Feature | Status | Preview |
| - | - | - |
| [typescript]() | `ready` | - 
| [props](https://svelte.dev/docs#component-format-script-1-export-creates-a-component-prop) | `ready` | - 
| [assignments](https://svelte.dev/docs#component-format-script-2-assignments-are-reactive) | `ready` | -
| [reactive statements](https://svelte.dev/docs#component-format-script-3-$-marks-a-statement-as-reactive) | `ready`| -
| [script context module](https://svelte.dev/docs#component-format-script-context-module) | todo | -
| [\<style\>](https://svelte.dev/docs#component-format-style) | `ready` | -
| [tags](https://svelte.dev/docs#template-syntax-tags) | `ready` | -
| [attributes and props](https://svelte.dev/docs#template-syntax-attributes-and-props) | `ready` | -
| [text expressions](https://svelte.dev/docs#template-syntax-text-expressions) | `ready` | -
| [comments](https://svelte.dev/docs#template-syntax-text-expressions) | todo | -
| [{#if ...}](https://svelte.dev/docs#template-syntax-if) | `ready` | - 
| [{#each ...}](https://svelte.dev/docs#template-syntax-each) | `ready`| -
| [{#await ...}](https://svelte.dev/docs#template-syntax-await) | todo| -
| [{#key ...}](https://svelte.dev/docs#template-syntax-key) | todo| -
| [{@html ...}](https://svelte.dev/docs#template-syntax-html) | `ready` | -
| [{@debug ...}](https://svelte.dev/docs#template-syntax-debug) | todo | -
| [{@const ...}](https://svelte.dev/docs#template-syntax-const) | todo | -
| [on:eventname](https://svelte.dev/docs#template-syntax-element-directives-on-eventname) | `ready` | -
 [bind:property](https://svelte.dev/docs#template-syntax-element-directives-bind-property) | `ready` | -
 [bind:group](https://svelte.dev/docs#template-syntax-element-directives-bind-group) | `ready` | -
 [bind:this](https://svelte.dev/docs#template-syntax-element-directives-bind-this) | `ready` | -
 [class:name](https://svelte.dev/docs#template-syntax-element-directives-class-name) | `ready` | -
 [style:property](https://svelte.dev/docs#template-syntax-element-directives-style-property) | `ready` | -
 | [use:action](https://svelte.dev/docs#template-syntax-element-directives-use-action) | `experimental` | -
 | [transition:fn](https://svelte.dev/docs#template-syntax-element-directives-transition-fn) | todo | -
 | [slot](https://svelte.dev/docs#template-syntax-slot) | `ready` | -
 | [\<svelte:self>](https://svelte.dev/docs#template-syntax-svelte-self) | todo | -
 | [\<svelte:component>](https://svelte.dev/docs#template-syntax-svelte-component) | todo | -
 | [\<svelte:element>](https://svelte.dev/docs#template-syntax-svelte-element) | todo | -
 | [\<svelte:window>](https://svelte.dev/docs#template-syntax-svelte-window) | todo | -
 | [\<svelte:body>](https://svelte.dev/docs#template-syntax-svelte-body) | todo | -
 | [\<svelte:head>](https://svelte.dev/docs#template-syntax-svelte-head) | todo | -
 | [\<svelte:fragment>](https://svelte.dev/docs#template-syntax-svelte-fragment) | todo | -
| [onMount](https://svelte.dev/docs#run-time-svelte-onmount) | `ready` | -
| [beforeUpdate](https://svelte.dev/docs#run-time-svelte-beforeupdate) | todo | -
| [afterUpdate](https://svelte.dev/docs#run-time-svelte-afterupdate) | `ready` | -
| [onDestroy](https://svelte.dev/docs#run-time-svelte-ondestroy) | `ready` | -
| [tick](https://svelte.dev/docs#run-time-svelte-tick) | todo | -
| [setContext](https://svelte.dev/docs#run-time-svelte-setcontext) | `ready` | -
| [getContext](https://svelte.dev/docs#run-time-svelte-getcontext) | `ready` | -
| [hasContext](https://svelte.dev/docs#run-time-svelte-hascontext) | `ready` | -
| [getAllContexts](https://svelte.dev/docs#run-time-svelte-getallcontexts) | todo | -
| [createEventDispatcher](https://svelte.dev/docs#run-time-svelte-createeventdispatcher) | `ready` | -
| [store](https://svelte.dev/docs#run-time-svelte-store) | todo | -

</div>
