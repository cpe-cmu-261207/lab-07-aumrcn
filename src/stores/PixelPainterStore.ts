import {Store} from 'pullstate'

type PixelPainterStoreType = {
  //we save painted color as hex code (string) in 2D array
  canvas: string[][]
  currentColor : string
}

//return an (16 x 16) 2D array filled with "#FFFFFF"
const createEmptyCanvas = () => {
  const output: string[][] = []
  for (let i=0; i<16; i++){
    output[i] = []
    for (let j=0; j<16; j++){
      output[i].push('#FFFFFF')
    }
  }
  return output
}

const arrColor : string[] = ["#000000","#804000",'#FE0000','#FE6A00','#FFD800','#00FF01','#FFFFFF','#01FFFF','#0094FE','#0026FF','#B100FE','#FF006E']

export const randomCanvas = () => {
  PixelPainterStore.update(e => {
    
    for (let i=0; i<16; i++){
      e.canvas[i] = []
      for (let j=0; j<16; j++){
        e.canvas[i].push(arrColor[Math.floor(Math.random() * 12)])
      }
    }
  })
} 

export const PixelPainterStore = new Store<PixelPainterStoreType>({
  canvas: createEmptyCanvas(),
  currentColor: "#000000"
})

export const clearCanvas = () => {
  PixelPainterStore.update(e => {
    for (let i=0; i<16; i++){
      e.canvas[i] = []
      for (let j=0; j<16; j++){
        e.canvas[i].push('#FFFFFF')
      }
    }
  })
}

export const setSelect = (e : string) => {
  PixelPainterStore.update(f => {
    f.currentColor = e;
  })
}

export const setCell = (arrCountI : number ,arrCountJ : number) => {
  PixelPainterStore.update(e => {
    e.canvas[arrCountI][arrCountJ] = e.currentColor;
  })
}