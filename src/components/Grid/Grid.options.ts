const container = { container : true };

const FlexOption = {
    start       : "flex-start",
    center      : "center",
    end         : "flex-end",
    stretch     : "stretch",
    baseline    : "baseline"  
}

const FlexDirection = {1 : "row", 2: "column"};

export const options = {

   contRowStartStart     :   {
        ...container,
        direction       :   FlexDirection[1],
        justify         :   FlexOption.start,
        alignItems      :   FlexOption.start
    },
    contRowStartCenter     :   {
        ...container,
        direction       :   FlexDirection[1],
        justify         :   FlexOption.start,
        alignItems      :   FlexOption.center
    },
    contRowStartEnd     :   {
        ...container,
        direction       :   FlexDirection[1],
        justify         :   FlexOption.start,
        alignItems      :   FlexOption.end
    },
    contRowStartStretch     :   {
        ...container,
        direction       :   FlexDirection[1],
        justify         :   FlexOption.start,
        alignItems      :   FlexOption.stretch
    },

    contRowCenterStart     :   {
        ...container,
        direction       :   FlexDirection[1],
        justify         :   FlexOption.center,
        alignItems      :   FlexOption.start
    },
    contRowCenterCenter     :   {
        ...container,
        direction       :   FlexDirection[1],
        justify         :   FlexOption.center,
        alignItems      :   FlexOption.center
    },
    contRowCenterEnd     :   {
        ...container,
        direction       :   FlexDirection[1],
        justify         :   FlexOption.center,
        alignItems      :   FlexOption.end
    },
    contRowCenterStretch     :   {
        ...container,
        direction       :   FlexDirection[1],
        justify         :   FlexOption.center,
        alignItems      :   FlexOption.stretch
    },

    contRowEndStart     :   {
        ...container,
        direction       :   FlexDirection[1],
        justify         :   FlexOption.end,
        alignItems      :   FlexOption.start
    },
    contRowEndCenter     :   {
        ...container,
        direction       :   FlexDirection[1],
        justify         :   FlexOption.end,
        alignItems      :   FlexOption.center
    },
    contRowEndEnd     :   {
        ...container,
        direction       :   FlexDirection[1],
        justify         :   FlexOption.end,
        alignItems      :   FlexOption.end
    },
    contRowEndStertch     :   {
        ...container,
        direction       :   FlexDirection[1],
        justify         :   FlexOption.end,
        alignItems      :   FlexOption.stretch
    },

    contColStartStart     :   {
        ...container,
        direction       :   FlexDirection[2],
        justify         :   FlexOption.start,
        alignItems      :   FlexOption.start
    },    
    contColStartCenter     :   {
        ...container,
        direction       :   FlexDirection[2],
        justify         :   FlexOption.start,
        alignItems      :   FlexOption.center
    },
    contColStartEnd     :   {
        ...container,
        direction       :   FlexDirection[2],
        justify         :   FlexOption.start,
        alignItems      :   FlexOption.end
    },
    contColStartStretch     :   {
        ...container,
        direction       :   FlexDirection[2],
        justify         :   FlexOption.start,
        alignItems      :   FlexOption.stretch
    },


    contColCenterStart     :   {
        ...container,
        direction       :   FlexDirection[2],
        justify         :   FlexOption.center,
        alignItems      :   FlexOption.start
    },
    contColCenterCenter     :   {
        ...container,
        direction       :   FlexDirection[2],
        justify         :   FlexOption.center,
        alignItems      :   FlexOption.center
    },
    contColCenterEnd     :   {
        ...container,
        direction       :   FlexDirection[2],
        justify         :   FlexOption.center,
        alignItems      :   FlexOption.center
    },
    contColCenterStretch     :   {
        ...container,
        direction       :   FlexDirection[2],
        justify         :   FlexOption.center,
        alignItems      :   FlexOption.stretch
    },
    
    contColEndStart     :   {
        ...container,
        direction       :   FlexDirection[2],
        justify         :   FlexOption.end,
        alignItems      :   FlexOption.start
    },
    contColEndCenter     :   {
        ...container,
        direction       :   FlexDirection[2],
        justify         :   FlexOption.end,
        alignItems      :   FlexOption.center
    },
    contColEndEnd     :   {
        ...container,
        direction       :   FlexDirection[2],
        justify         :   FlexOption.end,
        alignItems      :   FlexOption.end
    },
    contColEndStretch     :   {
        ...container,
        direction       :   FlexDirection[2],
        justify         :   FlexOption.end,
        alignItems      :   FlexOption.stretch
    }
}