import { LeftContainer } from "@/components/shared/LeftContainer";
import { Container } from "@/components/shared/Container";
import { Img } from "@/components/shared/Img";
import placeholderimage from "@/assets/placeholderimg.png";
import { FlexContainer } from "@/components/shared/FlexContainer";
import { Button, ButtonType } from "@/components/checkout/Button/Button";
import { Back } from "@/components/product/back";


export default function Summary(){

    return(
        <div className="p-2 ">
        <LeftContainer>
            <p className="text-3xl text-[#111827] font-[Inter] font-bold pt-2">Summary</p>
        </LeftContainer>
        <Container>
            <div className="flex flex-row justify-evenly place-items-center p-2 gap-4">
                    <Img source={placeholderimage.src} w={147} h={124} />   
                    <Container>
                    <p className="text-xl text-[#111827] font-[Inter] font-bold">Product Name</p>
                    <p className="text-base text-[#4B5563] font-[Inter] font-light">$ 0.00</p>
                    <p className="text-base text-[#4B5563] font-[Inter] font-light">Quantity: 1</p>
                    </Container>
                </div>
            </Container>
            <div className="flex flex-col w-[50%] items-center">
            <LeftContainer>
            <p className="text-xl text-[#111827] font-[Inter] font-bold pb-4">Payment amount</p>
            <p className="text-base text-[#4B5563] font-[Inter] font-light">$ 0.00</p>

            <p className="text-xl text-[#111827] font-[Inter] font-bold pb-4">Delivery address</p>
            <p className="text-base text-[#4B5563] font-[Inter] font-light">John Doe</p>
            <p className="text-base text-[#4B5563] font-[Inter] font-light">Baker street 225 Olso 90123</p>

            <p className="text-xl text-[#111827] font-[Inter] font-bold pb-4">Payment option</p>
            <p className="text-base text-[#4B5563] font-[Inter] font-light">Credit card</p>



            </LeftContainer>
            </div>
            <FlexContainer>
            <div className="flex flex-col items-center w-full p-4 gap-4">
            <Button placeholder="Pay" style={ButtonType.PRIMARY} />
            <Back placeholder="Back" ref="/" />
            </div>

            </FlexContainer>

      
        </div>
    );
//back route wasn't added yet because "/payment-option" wasn't created yet

}