import { useRef } from "react";
import { hexToRgb } from "./hexToRGB";

export function ColorConverter(): React.ReactNode {
    const colorDivRef = useRef<HTMLDivElement | null>(null)
    const newColourDivRef = useRef<HTMLDivElement | null>(null)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        const newColor = hexToRgb(inputValue);
        const inputLength = inputValue.length;

        const setBackgroundColor = (color: string) => {
            colorDivRef.current!.style.backgroundColor = color;
        };

        const setTextContent = (text: string) => {
            newColourDivRef.current!.textContent = text;
        };

        if (inputLength === 7) {
            setBackgroundColor(newColor ? inputValue : 'RED');
            setTextContent(newColor ? newColor : 'Ошибка!');
        } else {
            setBackgroundColor('initial');
            setTextContent('Введите в формате HEX');
        }
    }

    return (
        <div
            className='color-div'
            ref={colorDivRef}>
            <form>
                <input
                    onChange={changeHandler}
                    name="name"
                    maxLength={7} />
            </form>
            <div
                ref={newColourDivRef}
                className='new-color'>Введите в формате HEX</div>
        </div>
    )
} 