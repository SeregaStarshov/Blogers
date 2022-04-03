import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Button from '../button/Button';

import arrowRight from '../../assets/arrow-right.svg';
import arrowLeft from '../../assets/arrow-left.svg';
import Card from '../card/Card';
import { CustomSlider, ContainerArrow, ContainerCards } from './Slider.styles';
import { nextSlide, prevSlide } from '../../store/listCards/listCards.slice';

const Slider: FC = () => {
    const users = useSelector((state: RootState) => state.users.users);
    const { indexStart, indexFinish } = useSelector((state: RootState) => state.users);
    const [valueId, setValueId] = useState<number | null>(null);

    const quantityCards = users?.slice(indexStart, indexFinish);

    return (
        <CustomSlider>
            <ContainerArrow>
                <Button arrowValue={'left'} click={prevSlide}>
                    <img src={arrowLeft} alt='arrow' width='48px' height='48px' />
                </Button>
                <Button arrowValue={'right'} click={nextSlide}>
                    <img src={arrowRight} alt='arrow' width='48px' height='48px' />
                </Button>
            </ContainerArrow>
            <ContainerCards>
                {quantityCards?.map((element, index) => {
                    return (
                        <Card
                            item={element}
                            key={element.id}
                            color={
                                valueId === index + 1 + indexStart
                                    ? {
                                          colorTitle: '#FE8700',
                                          colorSubTitle: '#FE8700',
                                          colorBoxShadow: '#FE8700',
                                      }
                                    : {
                                          colorTitle: '#384758',
                                          colorSubTitle: '#606f81',
                                          colorBoxShadow: null,
                                      }
                            }
                            setValueId={setValueId}
                        />
                    );
                })}
            </ContainerCards>
        </CustomSlider>
    );
};

export default Slider;
