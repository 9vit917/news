import React from 'react';

import { Item, Label } from 'semantic-ui-react'

const setText = (s) => s.length > 600 ? s.substring(0, 300) + '...' : s; 

const Post = props => {
    return (     
        <Item>
            <Item.Image size='medium' src={props.img} />
            <Item.Content>
                <Item.Header>
                    <a href={ props.url }>{ props.title }</a>
                </Item.Header>
                <Item.Description>
                { setText(props.text) || "Will Update"}
                </Item.Description>
                <Item.Extra>
                    <Label icon="eye" content={props.views}></Label>
                </Item.Extra>
            </Item.Content>
        </Item>
    )
}


export default Post; 
