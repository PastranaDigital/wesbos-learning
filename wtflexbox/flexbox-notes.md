# Notes

- MAIN Axis: the direction your content is going (if row, then left to right... if column, then top to bottom)
- CROSS Axis: is parallel to the MAIN Axis
- flex-direction to change these

## Container Declarations
- Justify works based on the MAIN Axis
- Align works based on the CROSS Axis
- Align Items needs a height to work
- Justify & Align content answer the question: What do I do with all the unused white space?

## Item Declarations
- setting a width on the items only works when you have ```flex-wrap: wrap;``` declared on the container
- ```flex``` answers the question: What do I do if I don't have enough room or if there is empty space?
    - the set value dictates the ratio of the items
    - has 3 properties: flex-grow, flex-shrink & flex-basis
- flex-grow: How should we divide extra space?
    - default is 0, don't do anything with extra space
- flex-shrink: How much of my self should I give up when there's not enough space?
    - default is 1, all evenly share extra space
- flex-basis: What size should the item be? 