import { Component, Match, Show, Switch } from 'solid-js';
import { } from "@dfinity/candid"
import { FeedItem } from '../api/FeedActor';

type Props = { value: FeedItem };

function unEscape(htmlStr: string) {
    htmlStr = htmlStr.replace(/&lt;/g, "<");
    htmlStr = htmlStr.replace(/&gt;/g, ">");
    htmlStr = htmlStr.replace(/&quot;/g, "\"");
    htmlStr = htmlStr.replace(/&#39;/g, "\'");
    htmlStr = htmlStr.replace(/&amp;/g, "&");
    return htmlStr;
};

function toDateString(icTimestamp: bigint) {
    return new Date(Number(icTimestamp / 1_000_000n))
        .toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric", hour: 'numeric', minute: 'numeric' }); // TODO
};

const Item: Component<Props> = (props: Props) => {
    let channel = {
        id: props.value.channelId,
        name: props.value.channelId
    }; // TODO lookup channel
    return (
        <div style={{ 'height': '100%' }}>
            <div style={{
                height: "100%",
                "text-align": "start",
                padding: "20px",
                "box-sizing": 'border-box'
            }}>
                <div style={{
                    "font-size": "24px",
                    margin: "0 0 8px 0"
                }}>
                    <a href={props.value.content.link} target="_blank">
                        {props.value.content.title}
                    </a>
                </div>
                <div style={{
                    "font-size": "13px",
                    color: "rgb(152, 144, 130)",
                    margin: "0 0 8px 0"
                }}>
                    Channel: {channel.name}
                    {/* <a
                        href={channel.}
                        target="_blank"
                        style={{
                            color: "#6f6f6f"
                        }}>
                        TODO link to channel home page
                    </a> */}
                </div>
                <div style={{
                    "font-size": "13px",
                    color: "rgb(152, 144, 130)",
                    margin: "0 0 8px 0"
                }}>
                    <span>{toDateString(props.value.content.date)}</span>
                </div>

                <Show when={props.value.content.imageLink.length > 0}>
                    <div style={{
                        margin: "0 0 8px 0"
                    }}>
                        <img src={props.value.content.imageLink[0]} alt="Content Image" />
                    </div>
                </Show>
                <Switch>
                    <Match when={props.value.content.body[0]?.format[0] == "html"}>
                        <div innerHTML={unEscape(props.value.content.body[0]!.value)} />
                    </Match>
                </Switch>
            </div >
        </div>
    );
};

export default Item;

// const Cardz = ({ image, color }) => {
//     // To move the card as the user drags the cursor
//     const motionValue = useMotionValue(0);

//     // To rotate the card as the card moves on drag
//     const rotateValue = useTransform(motionValue, [-200, 200], [-50, 50]);

//     // To decrease opacity of the card when swiped
//     // on dragging card to left(-200) or right(200)
//     // opacity gradually changes to 0
//     // and when the card is in center opacity = 1
//     const opacityValue = useTransform(
//         motionValue,
//         [-200, -150, 0, 150, 200],
//         [0, 1, 1, 1, 0]
//     );

//     // Framer animation hook
//     const animControls = useAnimation();

//     // Some styling for the card
//     // it is placed inside the card component
//     // to make backgroundImage and backgroundColor dynamic
//     const style = ;

//     return (
//         <div className='App'>
//             <Frame
//                 center
//                 // Card can be drag only on x-axis
//                 drag='x'
//                 x={motionValue}
//                 rotate={rotateValue}
//                 opacity={opacityValue}
//                 dragConstraints={{ left: -1000, right: 1000 }}
//                 style={style}
//                 onDragEnd={(event, info) => {

//                     // If the card is dragged only upto 150 on x-axis
//                     // bring it back to initial position
//                     if (Math.abs(info.point.x) <= 150) {
//                         animControls.start({ x: 0 });
//                     } else {

//                         // If card is dragged beyond 150
//                         // make it disappear

//                         // Making use of ternary operator
//                         animControls.start({ x: info.point.x < 0 ? -200 : 200 });
//                     }
//                 }}
//             />
//         </div>
//     );
// };