import { Card, Fab } from "@suid/material";
import { Component, createMemo, createSignal, For, JSXElement, Show } from "solid-js";
import SpeedDial, { ButtonInfo } from "./SpeedDial";


type ButtonOptions = {
    children: JSXElement
};
const ButtonWrapper: Component<ButtonOptions> = (props: ButtonOptions) => {
    return (
        <div style={{ "flex-grow": '1', padding: "10px 0 10px 0", display: 'flex', 'justify-content': 'center' }}>
            {props.children}
        </div>
    );
};

type Props = {
    children: JSXElement,
    quickButtons: ButtonInfo[],
    speedDialButtons: ButtonInfo[]
};
const NavWrapper: Component<Props> = (props: Props) => {
    const paddedButtons: (ButtonInfo | null)[] = [...props.quickButtons];
    while (paddedButtons.length <= 3) {
        paddedButtons.unshift(null); // Pad buttons to always have them in same place
    }
    const floatingActionButton = (b: ButtonInfo | null) => {
        return <Fab onClick={b?.onClick} style={{
            visibility: b == null ? "hidden" : "inherit",
            "pointer-events": "all"
        }}>
            {b?.icon}
        </Fab>
    };
    return (
        <div style={{
            height: '100%'
        }}>
            <div style={{
                height: '100%',
                'margin-bottom': '76px'
            }}>
                {props.children}
            </div>
            <div style={{
                'max-width': '600px',
                position: 'fixed',
                bottom: 0,
                width: '100%',
                display: 'flex',
                "justify-content": 'space-around',
                "align-content": 'center',
                "align-items": "flex-end",
                "pointer-events": "none"
            }}>
                <For each={paddedButtons}>
                    {(b) =>
                        <ButtonWrapper>
                            {floatingActionButton(b)}
                        </ButtonWrapper>
                    }
                </For>
                <ButtonWrapper>
                    <SpeedDial options={props.speedDialButtons} />
                </ButtonWrapper>
            </div >
        </div >

    );
};

export default NavWrapper;