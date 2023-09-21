import AsciiArt from './AsciiArt'

export const tree = `
      _-_ 
  /~~   ~~\\ 
/~~         ~~\\ 
{               }
 \\  _-     -_  /
 ~  \\ //  ~
     | | 
     | |   
    // \\\\
  `

export default function Forest() {
  return (
    <>
      <AsciiArt model={tree} css={{
        bottom: 20,
      }} />
      <AsciiArt model={tree} css={{
        bottom: 90,
        left: 110,
        opacity: 0.3,
      }} />
      <AsciiArt model={tree} css={{
        bottom: 0,
        left: 200,
      }} />
      <AsciiArt model={tree} css={{
        bottom: 10,
        left: 330,
        opacity: 0.8,
      }} />
      <AsciiArt model={tree} css={{
        bottom: 50,
        left: 450,
        opacity: 0.5,
      }} />
      <AsciiArt model={tree} css={{
        bottom: 20,
        left: 580,
        opacity: 0.8,
      }} />
      <AsciiArt model={tree} css={{
        bottom: 100,
        left: 680,
        opacity: 0.3,
      }} />
      <AsciiArt model={tree} css={{
        bottom: 20,
        left: 780,
        opacity: 0.8,
      }} />
      <AsciiArt model={tree} css={{
        bottom: 80,
        left: 880,
        opacity: 0.4,
      }} />
      <AsciiArt model={tree} css={{
        bottom: 10,
        left: 980,
      }} />
      <AsciiArt model={tree} css={{
        bottom: 50,
        left: 1080,
        opacity: 0.7,
      }} />
      <AsciiArt model={tree} css={{
        bottom: 20,
        left: 1180,
      }} />
      <AsciiArt model={tree} css={{
        bottom: 100,
        left: 1280,
        opacity: 0.3,
      }} />
    </>
  )
}