

export default{
    Query:{
        movies: async(source, args,  {dataSources},state)=>{
            return dataSources.movieSource(null);
        },

        movie: async(source, args, {dataSources}, state)=>{
            const { id } = args

            result:any =  dataSources.movieSource([id]);

            if (result && result[0]){
                return result;
            }
            return null;
        }
    },

    Movie:{
        characters: async(source, args, {dataSources}, state)=>{
            console.dir('Executing Movie.characters resolver');
            return dataSources.characterSource(source.characters);
        }
    }

};