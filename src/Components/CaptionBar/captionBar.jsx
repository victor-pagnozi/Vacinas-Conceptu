import React from 'react'
import { ContainerCaption } from './styles'

export default function captionBar() {
    return (
        <ContainerCaption>
            <span>Legenda de cores</span>
            <div className="captions-colors">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="captions-divs">
                <div>0% - 10%</div>
                <div>11% - 20%</div>
                <div>21% - 30%</div>
                <div>31% - 40%</div>
                <div>41% - 50%</div>
                <div>51% - 60%</div>
                <div>61% - 70%</div>
                <div>71% - 80%</div>
                <div>81% - 90%</div>
                <div>91% - 100%</div>
            </div>
            <div className="caption-gray">
                SEM DADOS
            </div>
        </ContainerCaption>
    )
}
