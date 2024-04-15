import { Center, HStack, Skeleton, VStack } from "native-base"



export const DetailsSkeleton = () => {
    return (
        <Center w="100%" marginTop={20}>
                <Skeleton size="40" rounded="full"/>
                <HStack alignItems="center" marginBottom="2" space={2} marginTop={4}>
                    <Skeleton size="10" rounded="10" w="100"/>
                    <Skeleton size="10" rounded="10" w="100"/>
                </HStack>
                <VStack w="100%" marginLeft={8} marginTop="10">
                    <Skeleton mb="3" w="24" h="8" rounded="8" />
                    <HStack>
                    <Skeleton mb="3" w="40" h="8" rounded="8" marginRight={2}/>
                    <Skeleton mb="3" w="40" h="8" rounded="8" marginRight={2}/>
                    <Skeleton mb="3" w="40" h="8" rounded="8" />
                    </HStack>
                    <Skeleton mb="3" w="24" h="8" rounded="8" marginTop={6}/>
                    <HStack>
                    <Skeleton mb="3" w="40" h="8" rounded="8" marginRight={2}/>
                    <Skeleton mb="3" w="40" h="8" rounded="8" marginRight={2}/>
                    <Skeleton mb="3" w="40" h="8" rounded="8" />
                    </HStack>
                    <Skeleton mb="3" w="24" h="8" rounded="8" marginTop={6}/>
                    <HStack>
                    <Skeleton mb="3" w="40" h="8" rounded="8" marginRight={2}/>
                    <Skeleton mb="3" w="40" h="8" rounded="8" marginRight={2}/>
                    <Skeleton mb="3" w="40" h="8" rounded="8" />
                    </HStack>
                </VStack>
        </Center>
    )
}