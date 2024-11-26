import './BoardContent.scss';
import Column from '../Column/Column';
import { initData } from '../../Actions/initData';
import { useEffect, useState } from 'react';
import _ from 'lodash';
import { mapOrder } from '../../Utilities/Sorts'

// Définir les types
type CardType = 
{
    id: string;
    boardId: string;
    columnId: string;
    title: string;
    image: string | null;
};
  
type ColumnType = 
{
    id: string;
    boardId: string;
    title: string;
    cardOrder: string[];
    cards: CardType[];
};
  
type BoardType = 
{
    id: string;
    columnOrder: string[];
    columns: ColumnType[];
};

// Type pour les props
type ColumnProps = 
{
    column: ColumnType;
};  

const BoardContent = () =>
{
    const [ board, setBoard ] = useState<BoardType | null>(null)
    const [ columns, setColumns ] = useState<ColumnType[]>([])

    useEffect(() =>
    {
        const boardInitData = initData.boards.find(item => item.id === 'board-1')

        if ( boardInitData )
        {
            setBoard( boardInitData )

            setColumns(mapOrder(boardInitData.columns, boardInitData.columnOrder, 'id'))
        }
    }, [])

    if(_.isEmpty(board) )
    {
        return (
            <>
                <div className='not-found'>
                    Board not found
                </div>
            </>
        )
    }

    return (
        <>
            <div className='board-columns'>
                { columns && columns.length > 0 && columns.map(( column, index ) =>
                {
                    return (
                       < Column 
                            key=    { column.id }
                            column= { column }    
                        /> 
                    )
                })}
            </div>
        </>
    )
}

export default BoardContent;