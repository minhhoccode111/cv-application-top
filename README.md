# CV Application

This project was part of The Odin Project's JavaScript curriculum. The main goal of this project was to build a CV generator using React. The CV generator consists of two main sections: the control and the visualization sections. In the control section, the user can input, edit and delete their information. The information inputted in the control section will be available in real-time in the visualization section. When finished, the user can then download their CV properly formatted in PDF. This project was made using React JS.

## 👇 Assignment

[This project assignment on The Odin Project](https://www.theodinproject.com/lessons/node-path-react-new-cv-application)

## 🚀 Demo

[This project live demo](https://cvapplicationtop.netlify.app/)

## Navigation

[All projects' live demos](https://minhhoccode111.github.io/all-projects-live-demos/)

My previous project [Personal Portfolio](https://github.com/minhhoccode111/homepage-top/)

My next project [Memory Card Game](https://github.com/minhhoccode111/memory-card-top/)

## 📘 What I have learned

- use favicon.io to generate multiple favicons from a `.png` file to use for my website
- use react to custom `svg` by passing `props` like `height`, `width`, `color` to a `component` which will return and `svg`
- prevent form submit using 'Enter' in input in React
- a weird bug occur when my form has 2 buttons: 1 button `type='submit'` and 1 button doesn't set `type` and when I press 'Enter' within the form's input, a weird warning say `form submission canceled because the form is not connected` and all my form constraint is ignored (mean `input` with `required` has been ignored and the form just cancel). And this bug can be addressed when I add `type='button'` the other button and everything work normal
- passing callback deep many layer of components
- ReactJs combine with custom Image in a dynamic way

```jsx
import ImageSrc from "img.png"
const Image = ({width: '100%', style = {}}) => {
	const custom = Object.assign(styles, {display: 'block'});
	return <img style={custom} width={width} src={ImageSrc} alt="Describe this picture"/>
}
```

- accessibility with `tabIndex` and `onKeyDown={(e) => e.key === 'Enter' && e.target.click()}` so this app can be totally using with keyboard

## 💻 Built with

- Vite
- Bun
- ReactJS
- TypeScript
- TailwindCSS
- Animate.css
- uuid
- and more...

## 💡 Ideas to implement

- A download button to download CV in a formatted PDF file
